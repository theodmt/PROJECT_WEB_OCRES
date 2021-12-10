import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
    {
        title: "A propos de nous",
        path: "/",
        cName: "nav-text-title t1"
    },

    {
        title: "Accueil",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },

    {
        title: "Nos profils",
        path: "/nosprofils",
        icon: <ImIcons.ImProfile />,
        cName: "nav-text"
    },

    {
        title: "Nos cours",
        path: "/Tarifs",
        cName: "nav-text-title t2"
    },

    {
        title: "Cours et tarifs",
        path: "/Tarifs",
        icon: <AiIcons.AiFillEuroCircle />,
        cName: "nav-text"
    },

    {
        title: "Localisation",
        path: "/localisation",
        icon: <FaIcons.FaMapMarkedAlt />,
        cName: "nav-text"
    },

    {
        title: "Disponibilités",
        path: "/Disponibilite",
        icon: <FaIcons.FaCalendarAlt />,
        cName: "nav-text"
    },

    {
        title: "Avis",
        path: "/avis",
        cName: "nav-text-title t3"
    },

    {
        title: "Voir les avis",
        path: "/avis",
        icon: <FaIcons.FaCommentDots />,
        cName: "nav-text"
    },

    {
        title: "Laisser un avis",
        path: "/Laisseravis",
        icon: <AiIcons.AiOutlineForm />,
        cName: "nav-text"
    }
]



