
import React from 'react';
import {
    Cloud,
    Gear,
    Code,
    Shield,
    Globe,
    Buildings,
    Database,
    ChartBar,
    Lightning,
    Cpu,
    Lock,
    Graph,
    Users,
    Star
} from '@phosphor-icons/react';
import { allColorMappings } from '@/data/extended-training-courses';

export function getCategoryColors(color: string) {
    return allColorMappings[color] || allColorMappings.blue;
}

export function getLevelColors(level: string) {
    switch (level) {
        case 'Beginner': return 'bg-sky-500 text-white';
        case 'Intermediate': return 'bg-orange-500 text-white';
        case 'Advanced': return 'bg-red-500 text-white';
        default: return 'bg-gray-500 text-white';
    }
}

export function getTrainingIcon(iconName: any) {
    // If it's already a component, return it
    if (typeof iconName === 'function' || typeof iconName === 'object') {
        const IconComponent = iconName;
        return <IconComponent size={24} />;
    }

    // If it's a string, map it
    switch (iconName) {
        case 'Cloud': return <Cloud size={24} />;
        case 'Gear': return <Gear size={24} />;
        case 'Code': return <Code size={24} />;
        case 'Shield': return <Shield size={24} />;
        case 'Globe': return <Globe size={24} />;
        case 'Buildings': return <Buildings size={24} />;
        case 'Database': return <Database size={24} />;
        case 'ChartBar': return <ChartBar size={24} />;
        case 'Lightning': return <Lightning size={24} />;
        case 'Cpu': return <Cpu size={24} />;
        case 'Lock': return <Lock size={24} />;
        case 'Users': return <Users size={24} />;
        case 'Star': return <Star size={24} />;
        default: return <Cloud size={24} />;
    }
}
