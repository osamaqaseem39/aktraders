export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: "admin" | "staff" | "client"
  passwordHash: string
  createdAt: Date
  updatedAt: Date
  clientProfile?: ClientProfile
}

export interface ClientProfile {
  id: string
  clientId: string
  companyName?: string
  address?: string
  vatNumber?: string
  taxNumber?: string
  createdAt: Date
  updatedAt: Date
  client: User
}

export interface Shipment {
  id: string
  clientId: string
  trackingNumber: string
  origin: string
  destination: string
  cargoDetails: string
  weight?: number
  volume?: number
  status: ShipmentStatus
  estimatedDelivery?: Date
  actualDelivery?: Date
  createdAt: Date
  updatedAt: Date
  client: User
  statusLogs: ShipmentStatusLog[]
  invoices: Invoice[]
}

export type ShipmentStatus = 
  | "pending"
  | "in_transit"
  | "customs_clearance"
  | "delivered"
  | "cancelled"
  | "on_hold"

export interface ShipmentStatusLog {
  id: string
  shipmentId: string
  status: ShipmentStatus
  location?: string
  notes?: string
  timestamp: Date
  shipment: Shipment
}

export interface Quote {
  id: string
  clientId?: string
  clientName?: string
  clientEmail?: string
  clientPhone?: string
  cargoDetails: string
  origin: string
  destination: string
  estimatedWeight?: number
  estimatedVolume?: number
  status: QuoteStatus
  estimatedCost?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  client?: User
}

export type QuoteStatus = "pending" | "approved" | "declined" | "converted"

export interface Invoice {
  id: string
  shipmentId: string
  amount: number
  dueDate: Date
  paymentStatus: PaymentStatus
  description?: string
  createdAt: Date
  updatedAt: Date
  shipment: Shipment
}

export type PaymentStatus = "pending" | "paid" | "overdue" | "cancelled"

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  authorId: string
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
  author: User
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  subject?: string
  status: MessageStatus
  createdAt: Date
  updatedAt: Date
}

export type MessageStatus = "new" | "read" | "replied" | "archived"

export interface JobPosting {
  id: string
  title: string
  description: string
  location: string
  deadline: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface DashboardStats {
  totalShipments: number
  pendingShipments: number
  deliveredShipments: number
  totalRevenue: number
  monthlyRevenue: number
  activeClients: number
  pendingQuotes: number
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
  search?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}