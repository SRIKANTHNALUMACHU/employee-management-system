import { Box, HStack, Heading, Button } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { getEmployees } from "../../../../apis/resource1";
import { useEffect, useState, useMemo } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useTable } from "react-table";
import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";

const HrEmployee = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await getEmployees()
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
  const onClickAdd = () => {
    console.log("Add button clicked");
    navigate("/hr/add-employee");
  };
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sticky: "left",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Hired Date",
        accessor: "hiredate",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "SSN",
        accessor: "ssn",
      },
      {
        Header: "Designation",
        accessor: "designation",
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
export default HrEmployee;
