import 'dotenv/config';
import clientPromise from '../connection/mongodb';
import fs from 'fs';
import path from 'path';
import { ChakraType, listaChakras } from '../types/especimenTypes';


// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';
