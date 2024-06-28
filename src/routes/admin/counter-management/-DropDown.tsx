import { Check, ChevronsUpDown } from "lucide-react";
// import { countertypes } from "@/utils/types/admin_types";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { countertypes } from "@/utils/variables/admin_variables";
import { useState } from "react";

export function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-28 justify-between "
        >
          {/* {countertypes[0].managed} */}
          <p className=" overflow-hidden truncate text-xs">
            {value
              ? countertypes.find(
                  (countertypes) => countertypes.managed === value
                )?.managed
              : `${countertypes[0].managed}`}
          </p>
          <ChevronsUpDown className="ml-2 size-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search counter..." />
          <CommandEmpty>No counter found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {countertypes.map((counter) => (
                <CommandItem
                  key={counter.counterId}
                  value={counter.managed}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === counter.managed ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {counter.managed}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
