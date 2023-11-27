import { Box, HStack, Heading, Button, Text } from "@chakra-ui/react";
import { FcDepartment } from "react-icons/fc";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { getAllDepartments } from "../../../apis/resource";
import { useEffect, useState, useMemo } from "react";

import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";

const HrDepartments = () => {
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      await getAllDepartments()
        .then((res) => {
          console.log("res", res);
          setData(res);
        })
        .catch((err) => {
          console.log("error is", err);
        });
    }
    getData();
  }, [dataChanged]);
  const onClickAdd = () => {
    console.log("Add button clicked");
    navigate("/hr/add-department");
  };
  const columns = useMemo(
    () => [
      {
        Header: "Department ID",
        accessor: "departmentId",
        sticky: "left",
      },
      {
        Header: "Department Name",
        accessor: "departmentName",
      },
      {
        Header: "Department Manager",
        accessor: "departmentManager",
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
            <FcDepartment />
          </Text>
          <Heading fontSize="2xl"> Department Details</Heading>
        </HStack>

        <Button
          aria-label="none"
          rightIcon={<PlusSquareIcon />}
          onClick={onClickAdd}
          border="1px solid gray"
          alignSelf="self-end"
        >
          Add
        </Button>
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
export default HrDepartments;
