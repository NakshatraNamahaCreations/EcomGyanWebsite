import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardContent,
  Grid,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import { Card } from "react-bootstrap";

const CombinedComponent = () => {
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);
  const [feeDetails, setFeeDetails] = useState({});
  const [TotaSearchvolume, setTotaSearchvolume] = useState("");

  const search = async () => {
    if (!keywords) {
      setError("Please enter a keyword");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8082/api/amazon/keyword`, {
        params: { keywords },
      });

      if (res.status === 200) {
        setTotaSearchvolume(res.data.googleTrendsData);
        setData(res.data.amazonData.SearchResult.Items);
        setError("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
    }
  };

  const calculateFees = (price) => {
    let referralFee;
    let closingFee;
    const taxRate = 0.18;

    if (price <= 300) {
      referralFee = price * 0.05;
    } else if (price > 300 && price <= 500) {
      referralFee = price * 0.09;
    } else if (price > 500) {
      referralFee = price * 0.13;
    }

    if (price <= 250) {
      closingFee = 4;
    } else if (price > 250 && price <= 500) {
      closingFee = 9;
    } else if (price > 500 && price <= 1000) {
      closingFee = 30;
    } else if (price > 1000) {
      closingFee = 61;
    }

    const tax = (referralFee + closingFee) * taxRate;
    const costPerUnit = referralFee + closingFee + tax;
    const totalCost = price + costPerUnit;

    return {
      price,
      referralFee,
      closingFee,
      tax,
      costPerUnit,
      totalCost,
    };
  };

  const calculateSalesEstimation = (salesRank) => {
    if (salesRank) {
      return 238000 / salesRank / 4;
    }
    return "N/A";
  };

  console.log("data====", data);

  const handleProductClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container">
      <div className="row  justify-content-center ">
        <div className="col-md-12 p-3">
          <div className="row mt-3 mb-3">
            <div className="about-heading">Welcome Ecomgyan</div>
            <div className="col-md-12 row">
              <div className="about-heading">Product Search</div>
              <div className="col-md-10">
                <input
                  className="input_box"
                  type="text"
                  placeholder="Search by ASIN, Product Name, or Category"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  style={{ marginBottom: "20px" }}
                />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary search_icon"
                  type="submit"
                  onClick={search}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="poppins-medium" style={{ color: "blue" }}>
              search volume = {TotaSearchvolume}
            </div>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {data.length > 0 && (
            <TableContainer component={Paper} className="table-container">
              <Table>
                <TableHead className="table-header">
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      ASIN
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Image
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Title
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Sales Estimation
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Referral Fee
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Closing Fee
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Tax
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Cost per Unit
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      Total Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => {
                    const itemPrice =
                      item.Offers?.Listings[0]?.Price?.Amount || 0;
                    const fees = calculateFees(itemPrice);

                    return (
                      <TableRow
                        onClick={() =>
                          handleProductClick(
                            `https://www.amazon.in/dp/${item.ASIN}`
                          )
                        }
                        key={item.ASIN}
                        className="table-row"
                      >
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {item.ASIN}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {item.Images?.Primary?.Medium?.URL && (
                            <img
                              src={item.Images.Primary.Medium.URL}
                              alt={item.Title}
                              className="product-image"
                            />
                          )}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {item.ItemInfo?.Title.DisplayValue}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {itemPrice.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          {calculateSalesEstimation(
                            item.BrowseNodeInfo.BrowseNodes[0]?.SalesRank
                          )}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {fees.referralFee.toFixed(2)}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {fees.closingFee.toFixed(2)}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {fees.tax.toFixed(2)}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {fees.costPerUnit.toFixed(2)}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {fees.totalCost.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <img
            src="/images/chart.png"
            alt="loading...."
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;
