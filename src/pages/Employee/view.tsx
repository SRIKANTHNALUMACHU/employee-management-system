import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { MdAccountBalance } from "react-icons/md";
import { getBankAccountDetailsByEmployeeId } from "../../apis/resource";
import { useEffect, useState, useMemo } from "react";

import { useTable } from "react-table";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ViewBankAccounts = () => {
  const roleData = localStorage.getItem("roleDetails");
  const roleDetails = roleData && JSON.parse(roleData);
  console.log("details", roleDetails);

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     await getBankAccountDetailsByEmployeeId()
  //       .then((res) => {
  //         setData([res]);
  //       })
  //       .catch((err) => {
  //         console.log("error is", err);
  //       });
  //   }
  //   getData();
  // }, []);
  console.log("Data is", data);

  const columns = useMemo(
    () => [
      {
        Header: "Account Number",
        accessor: "accountNumber",
      },
      {
        Header: "Bank Location",
        accessor: "bankLocation",
      },
      {
        Header: "Bank Name",
        accessor: "bankName",
      },

      {
        Header: "Routing Number",
        accessor: "routingNumber",
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
            <MdAccountBalance />
          </Text>
          <Heading fontSize="2xl">Bank Account Details</Heading>
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
