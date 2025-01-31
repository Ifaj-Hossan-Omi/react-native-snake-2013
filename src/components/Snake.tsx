import { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Cordinate } from '../types/types';
import { View } from 'react-native';
import { Colors } from '../styles/colors';

interface SnakeProps {
    snake: Cordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
    return (
        <Fragment>
            {snake.map((segment: Cordinate, index: number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,
                }
                return <View key={index} style={[styles.snake, segmentStyle]} />
            })}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: Colors.primary,
        position: 'absolute',
    }
})