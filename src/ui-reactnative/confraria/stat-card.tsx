/**
 * StatCard — React Native
 * Peer deps: react-native, lucide-react-native
 */
import React from 'react'
import { View, Text, type ViewStyle, type StyleProp } from 'react-native'
import { TrendingUp, TrendingDown } from 'lucide-react-native'
import type { LucideIcon } from 'lucide-react-native'
import { Card } from '../ui/card'
import { useTheme } from '../utils'
import { spacing, fontSize, fontWeight, radii } from '../tokens'

export type StatCardColor = 'blue' | 'green' | 'red' | 'amber' | 'purple'

export interface StatCardTrend {
  value: number
  isPositive: boolean
}

export interface StatCardProps {
  icon?: LucideIcon
  label: string
  value: string | number
  trend?: StatCardTrend
  color?: StatCardColor
  style?: StyleProp<ViewStyle>
}

const colorMap: Record<StatCardColor, { bg: string; icon: string }> = {
  blue: { bg: 'rgba(159,193,50,0.15)', icon: '#9FC132' },
  green: { bg: 'rgba(16,185,129,0.15)', icon: '#047857' },
  red: { bg: 'rgba(239,68,68,0.15)', icon: '#b91c1c' },
  amber: { bg: 'rgba(245,158,11,0.15)', icon: '#b45309' },
  purple: { bg: 'rgba(168,85,247,0.15)', icon: '#7c3aed' },
}

export function StatCard({ icon: Icon, label, value, trend, color = 'blue', style }: StatCardProps) {
  const theme = useTheme()
  const { bg, icon: iconColor } = colorMap[color]

  return (
    <Card style={[{ padding: spacing[6] }, style]}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: fontSize.sm, color: theme.mutedForeground, marginBottom: spacing[2] }}>
            {label}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: spacing[2] }}>
            <Text style={{ fontSize: fontSize['2xl'], fontWeight: fontWeight.bold, color: theme.foreground }}>
              {value}
            </Text>
            {trend && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                  marginBottom: spacing[1],
                }}
              >
                {trend.isPositive ? (
                  <TrendingUp size={16} color="#047857" />
                ) : (
                  <TrendingDown size={16} color="#b91c1c" />
                )}
                <Text
                  style={{
                    fontSize: fontSize.xs,
                    fontWeight: fontWeight.medium,
                    color: trend.isPositive ? '#047857' : '#b91c1c',
                  }}
                >
                  {trend.value}%
                </Text>
              </View>
            )}
          </View>
        </View>
        {Icon && (
          <View style={{ padding: spacing[3], borderRadius: radii.lg, backgroundColor: bg }}>
            <Icon size={24} color={iconColor} />
          </View>
        )}
      </View>
    </Card>
  )
}
