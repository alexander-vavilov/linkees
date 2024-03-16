import { Label } from '@radix-ui/react-label'
import { FC, useState } from 'react'
import { ImLink } from 'react-icons/im'
import { MdDragIndicator } from 'react-icons/md'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { platforms } from '@/constants'
import { PlatformValue } from '@/types'

interface LinkCardProps {
  platform?: PlatformValue
  path?: string
  handleRemove: () => void
}

export const LinkCard: FC<LinkCardProps> = ({
  platform,
  path = '',
  handleRemove
}) => {
  const platformsArr = Object.keys(platforms).map((key) => ({
    value: key,
    ...platforms[key as PlatformValue]
  }))

  const [selectedValue, setSelectedValue] = useState<PlatformValue | undefined>(
    platform
  )

  const [pathValue, setPathValue] = useState(path)

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between p-4'>
        <div className='flex items-center'>
          <button>
            <MdDragIndicator />
          </button>
          <CardTitle className='text-md font-bold'>Link #1</CardTitle>
        </div>
        <button
          onClick={handleRemove}
          className='text-gray-400 transition-colors hover:text-gray-600'
        >
          Remove
        </button>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <div>
          <Label>Platform</Label>
          <Select
            value={selectedValue}
            onValueChange={(e: PlatformValue) => setSelectedValue(e)}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select the platform' />
            </SelectTrigger>
            <SelectContent>
              {platformsArr.map(({ value, label, icon: Icon }) => (
                <SelectItem key={value} value={value}>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <Icon size={18} />
                    <span className='text-base'>{label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Link</Label>
          <Input
            icon={<ImLink />}
            value={pathValue}
            onChange={(e) => setPathValue(e.target.value)}
            placeholder={selectedValue ? platforms[selectedValue].domain : ''}
          />
        </div>
      </CardContent>
    </Card>
  )
}
