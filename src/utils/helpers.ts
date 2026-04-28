// src/utils/helpers.ts

/**
 * دالة لجلب عنصر من مصفوفة بناءً على معرفه
 * @param array - مصفوفة العناصر
 * @param id - المعرف العنصر المطلوب
 * @returns العنصر أو undefined إذا لم يتم العثور عليه
 */
export const findById = <T>(array: T[], id: string | number): T | undefined => {
    return array.find(item => item['id'] === id);
};

/**
 * دالة لترتيب مصفوفة من العناصر بناءً على خاصية معينة
 * @param array - مصفوفة العناصر
 * @param key - مفتاح الخاصية التي سيتم الترتيب بناءً عليها
 * @param order - ترتيب العناصر (asc أو desc)
 * @returns مصفوفة مرتبة
 */
export const sortByKey = <T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
        return 0;
    });
};

/**
 * دالة للتحقق مما إذا كانت القيمة موجودة في مصفوفة
 * @param array - مصفوفة العناصر
 * @param value - القيمة للتحقق منها
 * @returns true إذا كانت القيمة موجودة، وإلا false
 */
export const includesValue = <T>(array: T[], value: T): boolean => {
    return array.includes(value);
};

/**
 * دالة لتأخير تنفيذ دالة معينة لفترة زمنية محددة
 * @param callback - الدالة المراد تنفيذها
 * @param delay - فترة التأخير بالميلي ثانية
 */
export const delay = (callback: () => void, delay: number): void => {
    setTimeout(callback, delay);
};

/**
 * دالة لتحويل كائن إلى مصفوفة من الأزواج [مفتاح، قيمة]
 * @param obj - الكائن المراد تحويله
 * @returns مصفوفة من الأزواج
 */
export const objectToEntries = <T>(obj: T): [keyof T, T[keyof T]][] => {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
};
