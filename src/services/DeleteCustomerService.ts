import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {

        if(!id) {
            throw new Error('Invalid Request');
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer) {
            throw new Error('Customer not found');
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Succesfully deleted" }
    }
}

export { DeleteCustomerService }