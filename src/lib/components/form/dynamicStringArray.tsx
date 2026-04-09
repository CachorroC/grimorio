/* eslint-disable no-unused-vars */
import styles from '#@/lib/styles/form.module.css';

interface DynamicStringArrayProps {
  title: string;
  items: string[];
  onChange: (newItems: string[]) => void;
}

export default function DynamicStringArray({
  title,
  items,
  onChange,
}: DynamicStringArrayProps) {
  const safeItems = items || [];

  const handleUpdate = (index: number, value: string) => {
    const newItems = [...safeItems];
    newItems[index] = value;
    onChange(newItems);
  };

  const handleAdd = () => {
    onChange([...safeItems, '']);
  };

  const handleRemove = (indexToRemove: number) => {
    onChange(
      safeItems.filter((_, index) => {
        return index !== indexToRemove;
      }),
    );
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionSubTitle}>{title}</h3>
      {safeItems.map((item, index) => {
        return (
          <div
            key={`${title}-${index}`}
            className={styles.arrayItem}
          >
            <input
              type="text"
              className={styles.inputFilled}
              value={item}
              onChange={(e) => {
                return handleUpdate(index, e.target.value);
              }}
              placeholder={`Añadir ${title.toLowerCase()}`}
            />
            <button
              type="button"
              className={`${styles.button} ${styles.deleteBtn}`}
              onClick={() => {
                return handleRemove(index);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className={`${styles.button} ${styles.addBtn}`}
        onClick={handleAdd}
      >
        + Añadir {title}
      </button>
    </div>
  );
}
