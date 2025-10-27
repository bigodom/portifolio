import { type LucideIcon } from 'lucide-react';
import React from 'react';

interface SimpleCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {title}
            </h3>
            <p className="text-gray-600 text-center">
                {description}
            </p>
        </div>
    );
};

export default SimpleCard;