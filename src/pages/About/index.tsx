import { Box } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { useTable, useBlockLayout, useColumnOrder } from "react-table";
import "./index.css";
import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
        sticky: "left",
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
      {
        Header: "Actions",
      },
    ],
    []
  );


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useBlockLayout,
      useColumnOrder
    );
  return (
    <Box backgroundColor="#ECF8F9" w="100vw" h="100vh" overflow="scroll">
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
                  if (cell.column.Header === "Actions") {
                    return (
                      <Stack
                        direction={"row"}
                        spacing="24px"
                        alignItems="center"
                        paddingLeft="1rem"
                      >
                        <EditIcon
                          _hover={{ cursor: "pointer" }}
                          w={6}
                          h={6}
                          color="black.500"
                          onClick={() => {
                            console.log("edit icon");
                          }}
                        />
                        <DeleteIcon
                          _hover={{ cursor: "pointer" }}
                          w={6}
                          h={6}
                          color="red.500"
                          onClick={() => {
                            console.log("Ddfd");
                          }}
                        />
                      </Stack>
                    );
                  }
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

          <Tr>
            <Td
              fontSize="0.875rem"
              lineHeight="1.313rem"
              fontStyle="normal"
              color="#545454"
            ></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default About;
