import React, { useState } from 'react';
import { Button, Card, CardContent, Collapse, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import '../components/css/header.css'

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="header">
            <Card className="cardStyle" sx={{ zIndex: '999', maxWidth: 800,borderRadius:5 }}>
                <div style={{display:'flex'}}>
                    <Typography variant='h5' sx={{ fontFamily: "NanumBarunGothicBold", display: 'flex', alignItems: 'center', justifyContent: 'center', px: 4, py: 1.5, pr: 0, width:'100%'}}>
                        실시간 하천 수위 확인
                    </Typography>
                    <Button onClick={handleExpandClick} sx={{ px: 0 }}>{expanded ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</Button>
                </div>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Card>
                        <CardContent>
                            <Typography paragraph>(하천 수위에 대한 정보)</Typography>
                        </CardContent>
                    </Card>
                </Collapse>
            </Card>

        </div>
    );
}

export default Header;
