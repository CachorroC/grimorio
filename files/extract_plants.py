import re
import json
import math
import os

def parse_vademecum(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    plants = []
    current_plant = {}
    current_key = None
    current_text = []

    # Possible headers
    headers = [
        "Nombre científico", "Nombres científicos", "Nombre cientifico",
        "Sinónimos", "Sinonimos",
        "Nombres comunes", "Nombre común", "Nombre comun",
        "Parte utilizada", "Partes utilizadas",
        "Usos tradicionales",
        "Principales constituyentes",
        "Actividad farmacológica", "Actividad farmacologica",
        "Indicaciones",
        "Posología", "Posologia",
        "Contraindicaciones y precauciones", "Contraindicaciones",
        "Interacción con otros medicamentos",
        "Toxicidad",
        "Formas farmacéuticas y otras preparaciones", "Formas farmacéuticas", "Formas farmaceuticas",
        "Bibliografía", "Bibliografia"
    ]
    
    plant_name_regex = re.compile(r'^([A-ZÁÉÍÓÚÑ]+(?:\s+[A-ZÁÉÍÓÚÑ]+)*)$')
    
    potential_name = ""
    
    for i, line in enumerate(lines):
        line = line.replace('\x0c', '') # remove form feeds
        stripped = line.strip()
        if not stripped:
            continue
            
        # Check if it's a new header
        is_header = False
        header_name = ""
        for head in headers:
            if stripped.lower().startswith(head.lower()):
                is_header = True
                header_name = head
                break
                
        if is_header:
            # save previous
            if current_key:
                current_plant[current_key] = " ".join(current_text).strip()
            # Special case: if we hit "Nombre científico" and we already have fields, it's a new plant!
            if header_name.lower().startswith("nombre científico") or header_name.lower().startswith("nombres científicos") or header_name.lower().startswith("nombre cientifico"):
                if current_plant.get(current_key): # check if we've populated anything
                    if len(current_plant) > 1:
                        # only append if it's a realistic plant
                        plants.append(current_plant)
                        current_plant = {}
                
                # set plant name
                current_plant["Nombre de la planta"] = potential_name
            
            # extract anything on the same line after the header (e.g., "Nombres comunes: Ají...")
            # finding the part after the header
            rest = stripped[len(header_name):].strip(' .:')
            current_text = [rest] if rest else []
            current_key = header_name
        else:
            # check if it's a plant name (all caps)
            if plant_name_regex.match(stripped):
                # We check to avoid overriding potential name if it's just some random all caps text inside a paragraph
                if not current_key or current_key.lower().startswith("biblio"):
                    potential_name = stripped
            
            if current_key:
                current_text.append(stripped)

    if current_key and current_text:
        current_plant[current_key] = " ".join(current_text).strip()
    if current_plant and len(current_plant) > 2:
        plants.append(current_plant)
        
    return plants

filepath = "/home/cachorro_cami/Projects/com/suarez-ramirez/grimorio/files/vademecum.txt"
plants = parse_vademecum(filepath)
print(f"Total plants parsed: {len(plants)}")

# save chunks
chunk_size = 20
num_chunks = math.ceil(len(plants) / chunk_size)
out_dir = "/home/cachorro_cami/Projects/com/suarez-ramirez/grimorio/files"

for i in range(num_chunks):
    chunk = plants[i*chunk_size : (i+1)*chunk_size]
    filename = os.path.join(out_dir, f"plants_{i+1}.json")
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(chunk, f, ensure_ascii=False, indent=2)
    print(f"Saved {filename} with {len(chunk)} plants.")
