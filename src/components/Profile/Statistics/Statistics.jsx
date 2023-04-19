import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTable } from 'react-table';
import "./Statistics.scss";
import Table from "./Table";
import CommentNotif from './CommentNotif';

const Statistics = () => {

    const profileVisitsData = [
        { date: '01/01/2023', visits: 10 },
        { date: '02/01/2023', visits: 15 },
        { date: '03/01/2023', visits: 20 },
        { date: '04/01/2023', visits: 25 },
        { date: '05/01/2023', visits: 30 },
        { date: '06/01/2023', visits: 35 },
        { date: '07/01/2023', visits: 10 },
        { date: '08/01/2023', visits: 14 },
        { date: '09/01/2023', visits: 22 },
        { date: '10/01/2023', visits: 18 },
        { date: '11/01/2023', visits: 52 },
        { date: '12/01/2023', visits: 45 },
    ];
    
    const likesByCreationData = [
        {
            name: 'Ressource 1',
            type: 'Image',
            likes: 50,
            downloads: 20,
            lastDownload: '01/01/2023',
        },
        {
            name: 'Ressource 2',
            type: 'Vidéo',
            likes: 30,
            downloads: 10,
            lastDownload: '02/01/2023',
        },
        {
            name: 'Ressource 3',
            type: 'Audio',
            likes: 20,
            downloads: 5,
            lastDownload: '03/01/2023',
        },
        {
            name: 'Ressource 4',
            type: 'Image',
            likes: 10,
            downloads: 2,
            lastDownload: '04/01/2023',
        },
        {
            name: 'Ressource 5',
            type: 'Image',
            likes: 5,
            downloads: 1,
            lastDownload: '05/01/2023',
        }
    ];

    const columns = React.useMemo(
        () => [
            { Header: 'Nom', accessor: 'name' },
            { Header: 'Type', accessor: 'type' },
            { Header: 'Likes', accessor: 'likes' },
            { Header: 'Téléchargements', accessor: 'downloads' },
            { Header: 'Dernier téléchargement', accessor: 'lastDownload' },
        ],
        []
    );
    

    return (
        <div className="statistics-container">
            <h1>Statistiques</h1>
            <div className="statistics-item">
                <strong>Visites du profil :</strong>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={profileVisitsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#EB6E44" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="statistics-item">
                <strong>Suivi stats création :</strong>
                <Table columns={columns} data={likesByCreationData} />
            </div>
            <div className="notif-container">
            <h2>Notifications</h2>
            <div className="comment-notifications">
                {[...Array(4)].map((_, index) => (
                    <CommentNotif
                        key={index}
                        commentCount={index + 1}
                        letter="A"
                        onClick={() => console.log(`Notification de commentaire ${index + 1} cliquée`)}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Statistics;
