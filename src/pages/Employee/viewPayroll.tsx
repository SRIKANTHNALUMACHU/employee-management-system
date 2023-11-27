import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";

import { getPayrollById } from "../../apis/resource";
import { useEffect, useState, useMemo } from "react";

import { useTable } from "react-table";

import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ViewPayroll = () => {
  const [data, setData] = useState([]);

  const roleData = localStorage.getItem("roleDetails");
  const roleDetails = roleData && JSON.parse(roleData);

  useEffect(() => {
    async function getData() {
      await getPayrollById(roleDetails.employeeId)
        .then((res) => {
          console.log("res", res);
          setData(res);
        })
        .catch((err) => {
          console.log("error is", err);
        });
    }
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Emp ID",
        accessor: "employeeId",
      },
      {
        Header: "Payroll ID",
        accessor: "payrollId",
      },
      {
        Header: "Base Pay",
        accessor: "basePay",
      },
      {
        Header: "Variable Pay",
        accessor: "variablePay",
      },
      {
        Header: "Tax Amount",
        accessor: "taxes",
      },
      {
        Header: "Total Salary",
        accessor: "totalPaid",
      },
      {
        Header: "Pay Date",
        accessor: "payDate",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <Box
      backgroundColor="#ECF8F9"
      w="100vw"
      h="100vh"
      overflow="scroll"
      padding={4}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginY="0.5rem"
        marginLeft="0.5rem"
      >
        <HStack>
          <Text fontSize="2xl" margin="auto">
            {" "}
            <FaUserTie />
          </Text>
          <Heading fontSize="2xl"> Payroll Details</Heading>
        </HStack>
      </Box>
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
                  if (cell.column.Header === "Pay Date") {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={i}
                        fontSize="0.875rem"
                        lineHeight="1.313rem"
                        fontStyle="normal"
                        color="#545454"
                      >
                        {new Date(
                          cell?.value?.toString()?.split("T")[0]
                        ).toLocaleString()}
                      </Td>
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
        </Tbody>
      </Table>
    </Box>
  );
};
export default ViewPayroll;
