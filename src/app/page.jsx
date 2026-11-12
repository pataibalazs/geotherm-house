// While the apartments are on sale, the homepage shows the apartments listing.
// To restore the company homepage, revert this file to commit e922012.
import ApartmentsPage, { metadata as apartmentsMetadata } from "./lakasok/page";

export const metadata = {
  ...apartmentsMetadata,
  alternates: { canonical: "/" },
  openGraph: { ...apartmentsMetadata.openGraph, url: "/" },
};

export default ApartmentsPage;
