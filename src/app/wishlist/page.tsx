// "use client";

// import React from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import toast from "react-hot-toast";
// import { getWishlist } from "@/services/wishlist/getWishlist";
// import { removeFromWishlist } from "@/services/wishlist/removeFromWishlist";

// export default function WishlistPage() {
//   const queryClient = useQueryClient();
//   const { data: session } = useSession();
//   const token = session?.user?.token;

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["wishlist"],
//     queryFn: () => getWishlist(token!),
//     enabled: !!token,
//   });

//   const wishlistItems = data?.data?.data || [];

//   const removeMutation = useMutation({
//     mutationFn: (id: string) => removeFromWishlist(id, token!),
//     onSuccess: () => {
//       toast.success("Removed from wishlist");
//       queryClient.invalidateQueries(["wishlist"]);
//     },
//     onError: (err: any) => toast.error(err.message || "Error removing item"),
//   });

//   if (!token)
//     return (
//       <h2 className="text-center mt-20">Please login to see your wishlist</h2>
//     );
//   if (isLoading)
//     return <h2 className="text-center mt-20">Loading wishlist...</h2>;
//   if (isError)
//     return <h2 className="text-center mt-20">Error loading wishlist</h2>;

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="text-center mt-20">
//         <h2 className="text-xl text-gray-600">Your wishlist is empty</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col lg:flex-row gap-5 my-10">
//       <div className="w-full lg:w-3/4">
//         <table className="w-full text-sm text-left text-body">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="p-4">Product</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {wishlistItems.map((prod: any) => (
//               <tr key={prod._id} className="border-b hover:bg-gray-50">
//                 <td className="p-4 font-semibold">{prod.title}</td>
//                 <td className="p-4 font-semibold">{prod.price} EGP</td>
//                 <td className="p-4">
//                   <Button
//                     variant="destructive"
//                     size="sm"
//                     disabled={removeMutation.status === "pending"}
//                     onClick={() => removeMutation.mutate(prod._id)}
//                   >
//                     {removeMutation.status === "pending"
//                       ? "Removing..."
//                       : "Remove"}
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
