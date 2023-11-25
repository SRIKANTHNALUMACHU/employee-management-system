import { Box, HStack, Heading, Button,Text } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { deleteEmployee, getAllEmployees } from "../../../../apis/resource1";
import { useEffect, useState, useMemo } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useTable } from "react-table";
import {useNavigate} from "react-router-dom"
import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";

const HrEmployee = () => {
  const [data, setData] = useState([]);
  const [dataChanged,setDataChanged]=useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      await getAllEmployees()
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
      {
        Header:"Actions"
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <Box backgroundColor="#ECF8F9" w="100vw" h="100vh" overflow="scroll" padding={4}>
      <Box display="flex" justifyContent="space-between" marginY="0.5rem">
        <HStack>
        <Text fontSize="2xl" margin="auto"> <FaUserTie/></Text>
          <Heading fontSize="2xl"> Employee Details</Heading>
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

                            navigate("/hr/edit-employee",{state:cell.row.original})
                            //console.log("edit icon",cell.row.original);
                          }}
                        />
                        <DeleteIcon
                          _hover={{ cursor: "pointer" }}
                          w={6}
                          h={6}
                          color="red.500"
                          onClick={async() => {
                           await deleteEmployee(cell.row.original?.empId).then(()=>{
                              console.log("successfully deleted")
                            }).catch((err)=>{
                              console.log("error while deletion")
                            })
                            setDataChanged(!dataChanged
                              )
                            
                          }}
                        />
                      </Stack>
                      </Td>
                    );
                  }
                  if (cell.column.Header === "Hired Date") {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={i}
                        fontSize="0.875rem"
                        lineHeight="1.313rem"
                        fontStyle="normal"
                        color="#545454"
                      >
                        {console.log("cell",cell.row.original?.empId)}
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
