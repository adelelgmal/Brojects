'use client'
import { useAppSelector } from "@/features/auth/store/store";

// 1. تحديد الأنواع المتاحة للـ Status بالظبط
type LockerStatus = "empty" | "full" | "locked";

// 2. استخدام النوع الجديد لمنع أي قيم غريبة وتوفير Autocomplete
const statusColor: Record<LockerStatus, string> = {
    empty: "bg-green-100 border-green-400 text-green-700",
    full: "bg-red-100 border-red-400 text-red-700",
    locked: "bg-gray-200 border-gray-400 text-gray-600",
};

const statusText: Record<LockerStatus, string> = {
    empty: "فاضي",
    full: "مليان",
    locked: "مقفول",
};

export default function LockersStatus() {
    // 3. يفضل التأكد أن الـ State نفسه في الـ Redux متبوع بـ LockerStatus، 
    // وإذا لم يكن كذلك، يمكننا عمل Type Assertion هنا كأمان إضافي:
    const lockers = useAppSelector((state) => state.lockers.lockers);

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {lockers.map((locker) => {
                // تأمين الـ status الحالي لتجنب الـ Undefined في حال وجود بيانات خاطئة
                const currentStatus = locker.status as LockerStatus;
                
                // fallback في حال جاءت قيمة غريبة من الـ API أو الـ Redux
                const colorClass = statusColor[currentStatus] || "bg-white border-gray-300 text-black";
                const textLabel = statusText[currentStatus] || "غير معروف";

                return (
                    <div
                        key={locker.id}
                        className={`w-24 h-24 rounded-lg border-2 flex flex-col items-center justify-center font-bold transition-all ${colorClass}`}
                    >
                        <span>درج {locker.id}</span>
                        <span className="text-sm font-medium">{textLabel}</span>
                    </div>
                );
            })}
        </div>
    );
}