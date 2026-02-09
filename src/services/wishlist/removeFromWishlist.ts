// export const removeFromWishlist = async (id: string, token: string) => {
//   if (!token) throw new Error("No token found");

//   const resp = await fetch(`${process.env.NEXT_PUBLIC_API}wishlist/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!resp.ok) {
//     const text = await resp.text();
//     throw new Error(`Failed to remove item: ${text}`);
//   }

//   return resp.json();
// };
