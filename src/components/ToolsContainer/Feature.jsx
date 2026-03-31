import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    console.log(feature);
    return (
        <div>
            <p className="flex gap-2 text-sm text-[#627382]"><Check className='text-[#30B868]'></Check> {feature}</p>
        </div>
    );
};

export default Feature;