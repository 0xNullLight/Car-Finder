// src/components/Card.tsx
// this imports the dependencies
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import theme from '../theme.js';

// defines the expected properties
interface CardProps {
    title: string;
    description: string;
    onViewDetails: () => void;
}
// this is the main container for the Card components title, description, image and view details button
// this component renders the card details on the right frame side of screen 
const Card: React.FC<CardProps> = ({ title, description, onViewDetails }) => {
    return (
        <Box sx={theme.rightFrame.card}>
            <Typography sx={theme.rightFrame.title}>{title}</Typography>
            <Typography sx={theme.rightFrame.description}>{description}</Typography>
            <Button onClick={onViewDetails} sx={theme.rightFrame.button}> 
                View Details
            </Button>
        </Box>
    );
};

export default Card;