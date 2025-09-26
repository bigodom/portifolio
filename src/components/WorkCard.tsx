type WorkCardProps = {
    imageUrl: string;
    title: string;
    description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imageUrl, title, description }) => {
    return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden m-4">
        <div className="h-50 w-full">
            <img src={imageUrl} alt="" className="h-full w-full" />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
    )
}

export default WorkCard