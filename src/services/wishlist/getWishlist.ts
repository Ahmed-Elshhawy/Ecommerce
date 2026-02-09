// export const getWishlist = async (token: string) => {
//   if (!token) throw new Error("No token found");

//   const resp = await fetch(`${process.env.NEXT_PUBLIC_API}wishlist`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!resp.ok) {
//     const text = await resp.text();
//     throw new Error(`Failed to fetch wishlist: ${text}`);
//   }

//   return resp.json();
// };
