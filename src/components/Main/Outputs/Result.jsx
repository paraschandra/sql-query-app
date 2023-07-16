import React from 'react'

export const Result = ({result}) => {
  return (
    <>
        <table className='my-2 md:my-10 h-full w-full text-center text-xs sm:text-base border-3
            shadow-md border-gray-100 overflow-x-auto border-collapse'>
            <thead>
                <tr className="bg-gray-200 text-gray-600">
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Order ID
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Customer ID
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Employee ID
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Ordered Date
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Shipped ID
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Freight
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Ship Name
                    </th>
                    <th className="px-4 py-2 border-2 border-gray-100 text-sm font-medium">
                        Ship Address
                    </th>
                </tr>
            </thead>

            <tbody>
                {result &&
                    result.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.orderID}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100 ">
                                    {row.customerID}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.employeeID}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.orderDate}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.shippedDate}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.freight}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.shipName}
                                </td>
                                <td className="px-2 py-4 text-center w-1/12 border border-gray-100">
                                    {row.shipAddress}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
  )
}
