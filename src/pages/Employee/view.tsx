import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { getEmployeeDetailsById } from "../../apis/resource";
import { useEffect, useState, useMemo } from "react";

import { useTable } from "react-table";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ViewBankAccounts = () => {
  const roleData = localStorage.getItem("roleDetails");
  const roleDetails = roleData && JSON.parse(roleData);

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await getEmployeeDetailsById(roleDetails.employeeId)
        .then((res) => {
          setData([res]);
          console.log([res]);
        })
        .catch((err) => {
          console.log("error is", err);
        });
    }
    getData();
  }, []);
  console.log("Data is", data);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Phone",
        accessor: "phone",
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
          <Heading fontSize="2xl">Employee Details</Heading>
        </HStack>
      </Box>
      {data[0] !== "" ? (
        <Table {...getTableProps()} variant="unstyled" borderRadius="0.313rem">
          <Thead bg="#FFF" boxShadow="md">
            {headerGroups.map((headerGroup) => (
              <Tr
                {...headerGroup.getHeaderGroupProps()}
                bg="#FFF"
                boxShadow="lg"
              >
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
      ) : (
        <Box textAlign="center" marginTop="5rem">
          Employee details are not available
        </Box>
      )}
    </Box>
  );
};
export default ViewBankAccounts;
