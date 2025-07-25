import AsyncStorage from '@react-native-async-storage/async-storage';

// Unified error handling wrapper
const withErrorHandling = async <T>(
  operation: () => Promise<T>,
  operationName: string,
): Promise<T | null> => {
  try {
    return await operation();
  } catch (error) {
    console.error(`[Storage] Error during ${operationName} operation:`, error);
    return null;
  }
};

/**
 * Storage utility class for managing data in AsyncStorage.
 */
export default class Storage {
  /**
   * Stores a value under the specified key.
   * @param key - The key to store the value under.
   * @param value - The value to store.
   * @returns A promise that resolves when the operation is complete, or null if an error occurs.
   */
  static set(key: string, value: string): Promise<void | null> {
    return withErrorHandling(() => AsyncStorage.setItem(key, value), 'set');
  }

  /**
   * Retrieves the value stored under the specified key.
   * @param key - The key to retrieve the value for.
   * @returns A promise that resolves to the stored value or null if not found or an error occurs.
   */
  static get(key: string): Promise<string | null> {
    return withErrorHandling(() => AsyncStorage.getItem(key), 'get');
  }

  /**
   * Removes the value stored under the specified key.
   * @param key - The key whose value should be removed.
   * @returns A promise that resolves when the operation is complete, or null if an error occurs.
   */
  static remove(key: string): Promise<void | null> {
    return withErrorHandling(() => AsyncStorage.removeItem(key), 'remove');
  }

  /**
   * Clears all data stored in AsyncStorage.
   * @returns A promise that resolves when the operation is complete, or null if an error occurs.
   */
  static clear(): Promise<void | null> {
    return withErrorHandling(() => AsyncStorage.clear(), 'clear');
  }
}
