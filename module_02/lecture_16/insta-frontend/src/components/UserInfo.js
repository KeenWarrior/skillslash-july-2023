import { Avatar, Typography } from "@mui/material";

export default function UserInfo({user}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "left",
            width: "400px",
            gap: "2rem",
        }}>
            <Avatar variant="" style={{
                width: "100px",
                height: "100px",
            }} src={user.avatar} />
            <div style={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                alignItems: "left",
            }}>
                <Typography variant="body1">{user.name}</Typography>
                <Typography variant="body1">{user.bio}</Typography>
            </div>
        </div>
    );
}