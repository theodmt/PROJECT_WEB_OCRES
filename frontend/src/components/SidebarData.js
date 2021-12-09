import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
    {
        title: "A propos de nous",
        path: "/",
        cName: "nav-text-title"
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
        path: "/",
        cName: "nav-text-title"
    },

    {
        title: "Cours et tarifs",
        path: "/coursettarifs",
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
        path: "/disponibilités",
        icon: <FaIcons.FaCalendarAlt />,
        cName: "nav-text"
    },

    {
        title: "Avis",
        path: "/",
        cName: "nav-text-title"
    },

    {
        title: "Voir les avis",
        path: "/voiravis",
        icon: <FaIcons.FaCommentDots />,
        cName: "nav-text"
    },

    {
        title: "Laisser un avis",
        path: "/laisseravis",
        icon: <AiIcons.AiOutlineForm />,
        cName: "nav-text"
    }
]



