import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import Loader from "./Loader";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
        );
        if (simplified) filteredData.splice(10);

        setCryptos(filteredData);
    }, [cryptosList, searchTerm, simplified]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) =>
                            setSearchTerm(e.target.value.toLowerCase())
                        }
                    />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                    >
                        {/* Note: Change currency.id to currency.uuid  */}
                        <Link
                            key={currency.uuid}
                            to={`/crypto/${currency.uuid}`}
                        >
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={
                                    <img
                                        className="crypto-image"
                                        src={currency.iconUrl}
                                        alt=""
                                    />
                                }
                                hoverable
                            >
                                <p>Price: ${millify(currency.price)}</p>
                                <p>
                                    Market Cap: ${millify(currency.marketCap)}
                                </p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;
