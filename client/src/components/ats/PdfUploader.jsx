import { Upload } from "lucide-react";

const PdfUploader = ({ pdfFile, setPdfFile }) => {

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload only PDF files.");
      return;
    }

    setPdfFile(file);
  };

  return (
    <div className="mt-10">

      <label className="block text-lg font-semibold mb-3">
        Upload Resume
      </label>

      <label
        htmlFor="pdfUpload"
        className="border-2 border-dashed border-white/20 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition"
      >

        <Upload size={40} className="mb-4 text-indigo-400" />

        <p className="text-lg font-medium">
          Click to Upload PDF
        </p>

        <p className="text-sm text-slate-400 mt-2">
          Only PDF files are supported
        </p>

      </label>

      <input
        id="pdfUpload"
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      {pdfFile && (
        <>
        <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
          <p className="text-green-400 font-medium">
            ✅ {pdfFile.name}
          </p>

          <p className="text-sm text-slate-400">
            {(pdfFile.size / 1024).toFixed(2)} KB
          </p>
        </div>
        <button
            onClick={() => setPdfFile(null)}
            className="mt-3 text-red-400 hover:text-red-300"
            >
            Remove File
        </button>
        </>
      )}

    </div>
  );
};

export default PdfUploader;