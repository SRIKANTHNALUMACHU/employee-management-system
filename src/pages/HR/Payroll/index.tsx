import { Box, HStack, Heading, Button, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { getAllPayrollRecords } from "../../../apis/resource";
import { useEffect, useState, useMemo } from "react";
import { FaReceipt } from "react-icons/fa";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";

const HrEmployee = () => {
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      await getAllPayrollRecords()
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
    navigate("/hr/add-payroll");
  };

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
      {
        Header: "Actions",
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
            <FaReceipt />
          </Text>
          <Heading fontSize="2xl">Payroll Details</Heading>
        </HStack>
        <HStack>
          <Button
            aria-label="none"
            rightIcon={<PlusSquareIcon />}
            onClick={onClickAdd}
            border="1px solid gray"
            alignSelf="self-end"
          >
            Add
          </Button>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  if (cell.column.Header === "Actions") {
                    return (
                      <Td key={i}>
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
                              navigate("/hr/edit-payroll", {
                                state: cell.row.original,
                              });
                            }}
                          />
                        </Stack>
                      </Td>
                    );
                  }
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
                        {cell?.value?.toString()?.split("T")[0]}
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
export default HrEmployee;
