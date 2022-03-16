import React from 'react';
export interface FloatingBadgeProps {
    counter?: string | number;
    size?: 'small' | 'medium' | 'large';
    top?: number;
    right?: number;
    className?: string;
}
export interface WithBadgeProps extends FloatingBadgeProps {
    isDisabled?: boolean;
    children: React.ReactNode;
}
