import { useEffect, useState } from "react";
import TableBody from "../TableBody";
import tableData from "./data.json";

const TableComponent = () => {
  const rows = [
    {
      id: 4765,
      firstName: " CANDY ",
      lastName: null,
      business: "CM BENESSERE",
    },
    {
      id: 4313,
      firstName: " SERAFINO",
      lastName: "CARUSO ",
      business: "Ciesse Elettrica di Caruso Serafino",
    },
    {
      id: 5440,
      firstName: "3274768289",
      lastName: null,
      business: "Estetica Lory",
    },
    {
      id: 4669,
      firstName: "AABDELHADI",
      lastName: "RABEH",
      business: "Mercato dell'usato di Abdoul",
    },
    {
      id: 4527,
      firstName: "ABDELALI",
      lastName: "WAHID",
      business: "Group Ayoma Service",
    },
    {
      id: 2853,
      firstName: "ABDELGANI",
      lastName: "EL HAOUD",
      business: "Parruchiere Said Amir",
    },
    {
      id: 4451,
      firstName: "ABDELHAK",
      lastName: "EL HACHIMI ",
      business: "Impresa Edile Europea Srls",
    },
    {
      id: 4446,
      firstName: "ABDELLATIF ",
      lastName: "EL ABBASSI",
      business: "Costruzione e Ristrutturazione Luce",
    },
    {
      id: 3197,
      firstName: "Abdelmajid",
      lastName: "Ezzahraoui",
      business: "Questura di Brescia",
    },
    {
      id: 2900,
      firstName: "Abu",
      lastName: null,
      business: "Studio Hydra Massage",
    },
    {
      id: 5356,
      firstName: "Ada",
      lastName: "Buccolieri",
      business: "AGHERASIA CENTRO ESTETICO",
    },
    {
      id: 6435,
      firstName: "Adam",
      lastName: "Hossam",
      business: "Parrucchiere L'egiziano",
    },
    {
      id: 5484,
      firstName: "Addolorata",
      lastName: "Mordino",
      business: "Doris Hair",
    },
    {
      id: 1160,
      firstName: "ADELA",
      lastName: "ELENA IVANCENCO",
      business: "Adela Ivancenco Skin Studio",
    },
    {
      id: 730,
      firstName: "ADHARA",
      lastName: "CENTRO BENESSERE",
      business: "Adhara Centro Benessere",
    },
    {
      id: 4494,
      firstName: "ADRIAN CATALIN ",
      lastName: "BOTA ",
      business: "Edil B&B",
    },
    {
      id: 5911,
      firstName: "Adriana",
      lastName: "Cremene",
      business: "Estetica Blu & Violet di Adriana Cremene",
    },
    {
      id: 5411,
      firstName: "Adriana",
      lastName: "Estetica",
      business: "Adriana Estetica",
    },
    {
      id: 6495,
      firstName: "ADRIANA IULIANA",
      lastName: "COTOP ",
      business: "Infinity studio by Adry",
    },
    {
      id: 1617,
      firstName: "ADRIANA MARIANA",
      lastName: "OPREA",
      business:
        "Assistenza Domiciliare Bergamo - Help to Dream Pulizie, Colf & Badanti",
    },
  ];
  const columns = [
    {
      description: "Id",
      propertyName: "Id",
      propertyType: 0,
      dataTableIcons: null,
      hidden: true,
      filtrable: false,
      filterDataType: 0,
      filterEndpoint: "",
    },
    {
      description: "Nome",
      propertyName: "FirstName",
      propertyType: 1,
      dataTableIcons: null,
      hidden: false,
      filtrable: true,
      filterDataType: 0,
      filterEndpoint: "",
    },
    {
      description: "Cognome",
      propertyName: "LastName",
      propertyType: 1,
      dataTableIcons: null,
      hidden: false,
      filtrable: true,
      filterDataType: 0,
      filterEndpoint: "",
    },
    {
      description: "Business",
      propertyName: "Business",
      propertyType: 1,
      dataTableIcons: null,
      hidden: false,
      filtrable: true,
      filterDataType: 0,
      filterEndpoint: "",
    },
  ];

  return <table>{rows && <TableBody columns={columns} rows={rows} />}</table>;
};

export default TableComponent;
