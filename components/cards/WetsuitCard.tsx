import React from 'react';

import { Text } from '../themed';
import {  WetsuitFormatted } from '../../database/modelTypes';
import Card from './Card';
import ImageIcon from '../ImageIcon';

type WetsuitCardProps = {
    data: WetsuitFormatted;
    onPress(): void;
};
const WetsuitCard = ({ data, onPress }: WetsuitCardProps) => {
    const formatSubtitles = () => {
        const subtitles = [];
        if (data.brand) {
            subtitles.push(data.brand);
        }
        subtitles.push(`Thickness: ${data.thickness} mm`);
        subtitles.push(`Acquired on: ${data.dateFormatted}`);

        return subtitles;
    };

    return (
        <Card
            title={
                <>
                    {data.name} <ImageIcon name="wetsuit" size={27} />{' '}
                </>
            }
            subtitles={formatSubtitles()}
            onPress={onPress}
        >
            <Text>{data.description}</Text>
        </Card>
    );
};

export default WetsuitCard;
