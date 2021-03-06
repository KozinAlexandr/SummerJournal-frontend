import React from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';

interface PostProps {
    title: string;
    id: number;
    description: string;
    imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({ id, title, description, imageUrl }) => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href={`/news/${id}`}>
                    <a>{title}</a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">{description}</Typography>
            {imageUrl && (
                <img
                    src="https://avatars.githubusercontent.com/u/66381294?v=4"
                    height={500}
                    width={600}
                    alt={title}
                />
            )}
            <PostActions />
        </Paper>
    );
};
