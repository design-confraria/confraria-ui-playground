"use client"

import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export interface DatePickerProps {
  /** Data selecionada (controlado) */
  value?: Date
  /** Callback ao selecionar uma nova data */
  onChange?: (date: Date | undefined) => void
  /** Texto exibido quando nenhuma data está selecionada */
  placeholder?: string
  /** Desabilita o componente */
  disabled?: boolean
  /** Formato de exibição compatível com date-fns. Padrão: "dd/MM/yyyy" */
  dateFormat?: string
  className?: string
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Selecione uma data",
  disabled = false,
  dateFormat = "dd/MM/yyyy",
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "h-9 w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
          {value ? format(value, dateFormat, { locale: ptBR }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date)
            setOpen(false)
          }}
          disabled={disabled}
          locale={ptBR}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}
