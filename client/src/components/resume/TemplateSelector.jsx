const templates=[
    {
        id:"modern",
        name:"Modern",
    },
    {
        id:"minimal",
        name:"Minimal",
    },
    {
        id:"professional",
        name:"Professional",
    },
];

export const TemplateSelector=({resumeData ,setResumeData})=>{
    
    const handleTemplateChange=(template)=>{
        setResumeData((prev)=>({
            ...prev,
            template,
        }));
    };
    
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Choose Template
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {templates.map((template) => (

          <button
            key={template.id}
            onClick={() => handleTemplateChange(template.id)}
            className={`p-5 rounded-2xl border transition
              ${
                resumeData.template === template.id
                  ? "border-indigo-500 bg-indigo-500/20"
                  : "border-white/10 hover:border-indigo-400"
              }`}
          >

            <p className="font-medium">
              {template.name}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}