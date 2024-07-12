"use client";
import { AppNavBar } from "@/components/AppNavBar";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSearch";
import { usePathname, useRouter } from "next/navigation";

export const ServicesNavBar = () => {
  const navigation = useRouter();
  const { serviceNameFilter, setServiceNameFilter } = useSearch();
  const path = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setServiceNameFilter(value);

    const queryString = new URLSearchParams({
      serviceNameFilter: value,
    }).toString();
    const url = `${path}?${queryString}`;
    navigation.push(url);
  };

  return (
    <AppNavBar>
      <Input
        className="w-1/2 max-w-xs"
        type="text"
        value={serviceNameFilter}
        placeholder="Busca algo..."
        onChange={handleChange}
      />
    </AppNavBar>
  );
};
