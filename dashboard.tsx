"use client"

import { useState } from 'react'
import { Bell, ChevronDown, Edit, MoreHorizontal, Star, Trash2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const COLORS = {
  Leadership: '#3b82f6',
  Career: '#10b981',
  'External Relations': '#f97316',
  Social: '#a855f7',
  Cultural: '#22c55e',
  Sports: '#eab308'
}

const categoryData = [
  { name: 'Leadership', value: 30 },
  { name: 'Career', value: 25 },
  { name: 'External Relations', value: 20 },
  { name: 'Social', value: 10 },
  { name: 'Cultural', value: 8 },
  { name: 'Sports', value: 7 },
]

const recentActivities = [
  { name: 'Student Council Meeting', category: 'Leadership', role: 'President', impact: 5, hours: 4 },
  { name: 'Career Fair Organization', category: 'Career', role: 'Coordinator', impact: 4, hours: 10 },
  { name: 'Alumni Networking Event', category: 'External Relations', role: 'Host', impact: 4, hours: 6 },
  { name: 'Charity Fundraiser', category: 'Social', role: 'Volunteer', impact: 3, hours: 8 },
  { name: 'Cultural Festival Performance', category: 'Cultural', role: 'Performer', impact: 4, hours: 12 },
]

const activityDetails = [
  { name: 'Student Council Meeting', category: 'Leadership', hours: 4, role: 'President', impact: 5, grade: 'A' },
  { name: 'Career Fair Organization', category: 'Career', hours: 10, role: 'Coordinator', impact: 4, grade: 'A-' },
  { name: 'Alumni Networking Event', category: 'External Relations', hours: 6, role: 'Host', impact: 4, grade: 'B+' },
  { name: 'Charity Fundraiser', category: 'Social', hours: 8, role: 'Volunteer', impact: 3, grade: 'B' },
  { name: 'Cultural Festival Performance', category: 'Cultural', hours: 12, role: 'Performer', impact: 4, grade: 'A-' },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <span className="text-2xl font-bold text-indigo-500">ExtraGrade</span>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {['Dashboard', 'Activities', 'Analytics', 'Settings'].map((item) => (
              <Button key={item} variant="ghost" className="w-full justify-start">
                <span>{item}</span>
              </Button>
            ))}
          </nav>
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-400">Student</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between border-b border-gray-700 bg-gray-800 p-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <ChevronDown className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Overall Grade', value: 'A-', className: 'text-4xl font-bold' },
              { title: 'Total Score', value: '91.5/100' },
              { title: 'Activities', value: '6 Active' },
              { title: 'Total Hours', value: '270h' },
            ].map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${stat.className || ''}`}>{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 2-Column Layout */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Category Distribution Chart */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">{activity.name}</p>
                        <p className="text-sm text-muted-foreground">{activity.category}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(activity.impact)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{activity.hours}h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Details Table */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Activity Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Role Level</TableHead>
                    <TableHead>Impact Score</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activityDetails.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{activity.name}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${COLORS[activity.category]} bg-opacity-10 text-${COLORS[activity.category]}`}>
                          {activity.category}
                        </span>
                      </TableCell>
                      <TableCell>{activity.hours}</TableCell>
                      <TableCell>{activity.role}</TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(activity.impact)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{activity.grade}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}