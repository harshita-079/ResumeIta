import { Mail, Phone, MapPin } from 'lucide-react'

export const PreviewHeader = ({resumeData}) => {
  return (
    <div className="border-b border-gray-200 pb-8 mb-8">
        <h1 className="text-5xl font-bold mb-3">
            {resumeData.personal_info.full_name}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
            {resumeData.personal_info.profession}
        </p>

        {/* Contact */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
                <Mail size={16} />
                {resumeData.personal_info.email}
            </div>

            <div className="flex items-center gap-2">
                <Phone size={16} />
                {resumeData.personal_info.phone}
            </div>

            <div className="flex items-center gap-2">
                <MapPin size={16} />
                {resumeData.personal_info.location}
            </div>

        </div>

    </div>

  )
}