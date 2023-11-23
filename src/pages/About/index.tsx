import { Box } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import "./index.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
const About = () => {
  const [data, setData] = useState([
    {
      id: 171981,
      name: "A Great Customer",
      email: "customerplusplus@email.com",
      channel: "email",
      address: "2312 Eglinton Ave.",
      postal: "M3M 3M3",
      city: "Toronto",
      province: "ON",
      country: "CA",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://waveaccounting.github.io/se-challenge-fe-customers/settings.json"
      );
      const movies = await response.json();
      console.log(movies);
      setData(movies?.customers);
      movies?.customers.map((item: object) => {
        console.log("item is", item);
      });
    }
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Address.",
        accessor: "address",
      },
      {
        Header: "Channel",
        accessor: "channel",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Postal",
        accessor: "postal",
      },
      {
        Header: "Province",
        accessor: "province",
      },
      {
        Header: "Point Name",
        accessor: "name",
      },
    ],
    []
  );
  // id: number;
  // name: string;
  // email: string;
  // channel: string;
  // address: string;
  // postal: string;
  // city: string;
  // province: string;
  // country: string;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <Box backgroundColor="#ECF8F9" w="100vw" h="100vh">
      <Table {...getTableProps()} variant="unstyled" borderRadius="0.313rem">
        <Thead bg="#FFF" boxShadow="md">
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()} bg="#FFF" boxShadow="lg">
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  fontSize="0.938rem"
                  lineHeight="1.313rem"
                  fontStyle="normal"
                  color="#545454"
                  textTransform="none"
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={i}
                      fontSize="0.875rem"
                      lineHeight="1.313rem"
                      fontStyle="normal"
                      color="#545454"
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default About;
