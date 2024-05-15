import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
    MoneyCollectOutlined,
    DollarCircleOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    TrophyOutlined,
    CheckOutlined,
    NumberOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";

import {
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path
    const { coinId } = useParams();
    return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
