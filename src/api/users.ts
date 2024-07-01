import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Users } from "@/utils/types/user";


export function useGetUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const {data: getUsersResponse} = await axios.get('/api/core/admin/users?status=0,1,2')
            return getUsersResponse.data as Users
        },
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false
    })
}