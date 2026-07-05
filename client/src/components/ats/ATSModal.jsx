const ATSModal = ({result,onClose}) => {
    if(!result) return null;
    const {score,checks,suggestions} = result;
    return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

        <div className="bg-white rounded-2xl w-full max-h-[90vh] overflow-y-auto max-w-2xl p-8">
            {/* header */}
            <div className="flex-col justify-between items-center mb-8">
                <div className="flex justify-between items-center mb-4 ">
                    <h2 className="text-3xl font-bold text-black">
                        ATS Analysis
                    </h2>
                    <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-black text-2xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="mb-10">

                    <h3 className="text-6xl font-extrabold text-green-600">

                        {score}/100

                    </h3>

                    <p className="text-gray-500 mt-2">

                        Overall ATS Score

                    </p>

                </div>

                <div className="mb-10">

                    <h3 className="text-xl font-semibold mb-4 text-black">

                        Checks

                    </h3>

                    <div className="space-y-3">

                        {checks.map((check) => (

                        <div
                            key={check.title}
                            className="flex justify-between items-center rounded-lg border border-gray-200 p-3"
                        >

                            <span className="text-gray-800">

                            {check.title}

                            </span>

                            <span className="text-2xl">

                            {check.status ? "✅" : "❌"}

                            </span>

                        </div>

                        ))}

                    </div>

                </div>

                {/* suggestion */}
                <div>

                    <h3 className="text-xl font-semibold mb-4 text-black">

                        Suggestions

                    </h3>

                    <ul className="list-disc pl-5 space-y-2">

                        {suggestions.length > 0 ? (

                        suggestions.map((item, index) => (

                            <li
                            key={index}
                            className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-gray-700"
                            >

                            {item}

                            </li>

                        ))

                        ) : (

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 font-medium">

                            Excellent! Your resume looks ATS friendly.

                        </div>

                        )}

                    </ul>

                </div>

            </div>

        </div>

    </div>
    );
};

export default ATSModal;