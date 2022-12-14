import React from 'react';

import { Text } from '../themed';
import { Surfboard, SurfboardFormatted } from '../../database/modelTypes';
import Card from './Card';
import ImageIcon from '../ImageIcon';
import { formatTimestamp } from '../../utils';

type SessionCardProps = {
    data: SurfboardFormatted;
    onPress(): void;
};
const SurfboardCard = ({ data, onPress }: SessionCardProps) => {
    const formatSubtitles = () => {
        const subtitles = [];
        if (data.brand) {
            subtitles.push(data.brand);
        }
        subtitles.push(`Length: ${data.length}'' | Volume: ${data.volume} L`);
        subtitles.push(`Acquired on: ${data.dateFormatted}`);

        return subtitles;
    };

    return (
        <Card
            title={
                <>
                    {data.name} <ImageIcon name="surf" size={27} />{' '}
                </>
            }
            subtitles={formatSubtitles()}
            onPress={onPress}
        >
            <Text>{data.description}</Text>
        </Card>
    );
};

export default SurfboardCard;
