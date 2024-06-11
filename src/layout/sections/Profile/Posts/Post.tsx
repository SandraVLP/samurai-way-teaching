import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


export const Post = () => {
    return (
        <Card sx={{mb: '50px'}}>
            <CardHeader
                avatar={
                    <Avatar>J</Avatar>
                }
                title="Jo Smith"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </CardContent>
            <IconButton/>
        </Card>
    );
}

