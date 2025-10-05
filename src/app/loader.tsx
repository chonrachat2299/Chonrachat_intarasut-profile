
"use client";

import { useEffect, useRef, useState } from "react";

export default function LoaderPage() {
    const DURATION_HOURS = 5;
    const DURATION_SECONDS = DURATION_HOURS * 60 * 60;

    const [running, setRunning] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [remaining, setRemaining] = useState<number>(DURATION_SECONDS);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const formatTime = (secs: number): string => {
        const h = Math.floor(secs / 3600).toString().padStart(2, "0");
        const m = Math.floor((secs % 3600) / 60).toString().padStart(2, "0");
        const s = Math.floor(secs % 60).toString().padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    const start = (): void => {
        if (running) return;
        setRunning(true);
        setShowModal(true);

        intervalRef.current = setInterval(() => {
            setRemaining((prev) => {
                if (prev <= 1) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setRunning(false);
                    setShowModal(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const stop = (): void => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setRunning(false);
        setShowModal(false);
    };

    const reset = (): void => {
        stop();
        setRemaining(DURATION_SECONDS);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">
                    หน้าโหลด — Loader Modal (5 ชั่วโมง)
                </h1>

                <div className="flex gap-3 items-center">
                    <button
                        onClick={start}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:opacity-95 disabled:opacity-60"
                        disabled={running || remaining === 0}
                    >
                        เริ่มการทำงาน
                    </button>

                    <button
                        onClick={stop}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:opacity-95 disabled:opacity-60"
                        disabled={!running}
                    >
                        หยุดการทำงาน
                    </button>

                    <button
                        onClick={reset}
                        className="px-3 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                        รีเซ็ต
                    </button>

                    <div className="ml-auto text-sm text-gray-700">
                        สถานะ:{" "}
                        {running ? (
                            <span className="font-semibold text-green-600">กำลังทำงาน</span>
                        ) : (
                            <span className="font-semibold text-gray-600">หยุด</span>
                        )}
                    </div>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="text-xs text-gray-500">ตัวนับที่เหลือ</div>
                        <div className="text-xl font-mono">{formatTime(remaining)}</div>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/100">
                        <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <div className="animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-gray-600 w-16 h-16"></div>
                                </div>
                                <div className="text-lg font-semibold">กำลังทำงาน...</div>
                                {/* <div className="text-sm text-gray-600">
                                    เวลาที่เหลือ:{" "}
                                    <span className="font-mono">{formatTime(remaining)}</span>
                                </div> */}
                                <div className="flex gap-2 mt-3">
                                    <button
                                        onClick={stop}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                                    >
                                        หยุดการทำงาน
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

